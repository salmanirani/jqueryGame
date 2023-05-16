$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // تولید یک عدد تصادفی بین 1 تا 100
    var attempts = 0;
    $('#checkBtn').click(function() {
        var guess = parseInt($('#guess').val());
        if (guess === randomNumber) {
            $('#result').text('تبریک! حدس شما درست بود.');
            $(this).attr('disabled', 'disabled'); // غیرفعال کردن دکمه بررسی بعد از برد کاربر
        } else if (guess < randomNumber) {
            $('#result').text('عدد بزرگتری را حدس بزنید.');
        } else {
            $('#result').text('عدد کوچکتری را حدس بزنید.');
        }
        attempts++;
        $('#attempts').text('تعداد تلاش‌ها: ' + attempts);
    });
 });
 