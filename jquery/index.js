import $ from 'jquery';

$(document).ready(function () {
	$.ajax({
		url: 'https://fakestoreapi.com/products?limit=5',
		async: false,
		success: function (data) {
			$(data).each((idx, value) => {
				$('#product-list').append(
					`<li>${value.title} <span class="cross" data-product-id=${value.id}>X</span></li>`
				);
			});
			$(document).on('click', '.cross', function (e) {
				$.ajax({
					url: `https://fakestoreapi.com/products/${$(e.target).attr(
						'data-product-id'
					)}`,
					method: 'DELETE',
					success: function () {
						$(e.target).parent().remove();
					},
				});
			});
		},
	});
});
