/**
 * SADAA Hospitality — استقبال طلبات صفحة المبيعات في Google Sheet
 * طريقة التركيب في ملف README.md
 */

// إيميلات تصلها نسخة من كل طلب جديد (اتركها فارغة [] لإيقاف التنبيه)
const NOTIFY_EMAILS = ["n.alnajdy@sadaa.com.sa"];

const HEADERS = ["التاريخ", "الاسم", "الجهة", "الجوال", "الإيميل", "نوع العميل", "الفندق",
                 "ملاحظات", "الصفحة", "اللغة", "المصدر", "الحالة", "المسؤول"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = e.parameter || {};
    const sheet = getSheet_();
    const clean = v => String(v || "").replace(/^[=+\-@]/, "'$&").slice(0, 1000); // حماية من حقن المعادلات
    const row = [
      new Date(), clean(p.name), clean(p.company), clean(p.phone), clean(p.email), clean(p.type),
      clean(p.hotel), clean(p.notes), clean(p.page), clean(p.lang),
      clean(p.source), "جديد", ""
    ];
    sheet.appendRow(row);

    if (NOTIFY_EMAILS.length) {
      const body = HEADERS.slice(0, 11).map((h, i) => `${h}: ${row[i]}`).join("\n");
      MailApp.sendEmail({
        to: NOTIFY_EMAILS.join(","),
        subject: `طلب جديد من صفحة المبيعات — ${p.name} (${p.hotel})`,
        body: body + "\n\nواتساب: https://wa.me/" + String(p.phone || "").replace(/\D/g, "")
      });
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName("الطلبات");
  if (!sh) {
    sh = ss.insertSheet("الطلبات");
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#5E4E77").setFontColor("#ffffff");
    sh.setRightToLeft(true);
    const status = SpreadsheetApp.newDataValidation().requireValueInList(["جديد", "تم التواصل", "عرض سعر", "تم التعاقد", "غير مهتم"]).build();
    sh.getRange("L2:L").setDataValidation(status);
  }
  return sh;
}

// شغّلها مرة واحدة يدويًا لإنشاء الورقة ومنح الصلاحيات
function setup() { getSheet_(); }
