$(document).ready(function () {
	var $parents = $('.text');
	var $texts = $('.text p');
	$texts.each(function (i, text) {
		var $parent = $($parents[i]);
		var $text = $(text);
		// Checa se o texto está passando o limite da div
		if ($text.prop('scrollWidth') > $text.outerWidth()) {
			console.log($text.prop('scrollWidth'), $text.outerWidth());
			// Transforma o texto em um array de palavras
			var words = $text.text().split(' ');
			// Determina um limitador baseado na metade da quantidade de palavras.
			// Deve ser aprimorado pra aceitar textos com mais de uma linha
			var count = words.length - ~~ (words.length / 2); // ~~ é o mesmo que parseInt(), porem mais performatico

			// Cria duas variaveis para receber cada linha
			// Deve ser mudado para array quando for adicionar suporte a mais de duas linhas
			var newWords1 = '';
			var newWords2 = '';

			// Preenche a primeira linha com a metade da array de palavras
			for (var i = 0; i < count; i++) {
				newWords1 += words[i] + ' ';
			};

			// Preenche a segunda linha com o restante de palavras
			for (var i = count; i < words.length; i++) {
				newWords2 += words[i] + ' ';
			};

			// Deleta o texto atual e substitui por duas linhas
			$parent.html('');
			$parent.append('<p>' + newWords1 + '</p><p>' + newWords2 + '</p>')
		}
	});
});