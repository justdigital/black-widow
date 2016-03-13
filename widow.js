var Widow = {
	defaultClass: "text",
	defaultElement: "p",
	parents: [],
	texts: [],
	addNoWrapToText: true,

	getParents: function () {
		var parentElements = document.getElementsByClassName(this.defaultClass);
		var parentsArr = [];

		for (var p = 0; p < parentElements.length; p++) {
			var el = parentElements[p];
			var children = el.querySelectorAll(this.defaultElement);
			var parentObj = {
				el: el,
				children: children
			};
			parentsArr.push(parentObj);
		}

		return parentsArr;
	},

	parseParent: function (parent) {
		var parentEl = parent.el;
		for (var c in parent.children) {
			var childEl = parent.children[c];

			// Checa se o texto está passando o limite da div
			if (childEl.scrollWidth > childEl.offsetWidth) {

				// Transforma o texto em um array de palavras
				var words = childEl.innerText.split(' ');
				var wordsLength = words.length;

				// Determina um limitador baseado na metade da quantidade de palavras.
				// Deve ser aprimorado pra aceitar textos com mais de uma linha
				var count = wordsLength - ~~ (wordsLength / 2); // ~~ é o mesmo que parseInt(), porem mais performatico

				// Cria duas variaveis para receber cada linha
				// Deve ser mudado para array quando for adicionar suporte a mais de duas linhas
				var newWords1 = '';
				var newWords2 = '';


				for (var i = 0; i < words.length; i++) {
					if (i < count) {
						// Preenche a primeira linha com a metade da array de palavras
						newWords1 += words[i] + ' ';
					} else {
						// Preenche a segunda linha com o restante de palavras
						newWords2 += words[i] + ' ';
					}
				};
				// Deleta o texto atual e substitui por duas linhas
				parent.el.innerHTML = '<p>' + newWords1 + '</p><p>' + newWords2 + '</p>';
			}
		}
	},

	parseParents: function (parents) {
		for (var p in parents) {
			var parent = parents[p];
			this.parseParent(parent);
		}
	},

	init: function () {
		// Pega o array de parents
		var parentList = this.getParents();

		// Inicia o parse de cada parent
		this.parseParents(parentList);
	}
};

(function() {
	Widow.init();
})();
