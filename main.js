(async () => {
	await import('https://code.jquery.com/jquery-3.6.0.slim.min.js');
	const {$} = window;
	const html = $('body').empty().css({
        'text-align': 'center',
        padding: '1em',
        'user-select': 'none'
    });
    $('<textarea>').appendTo(html).on('change', ({target}) => {
        const e = $(target);
        e.val(e.val().replace(/\s/g, ''));
    });
})();
