MAIN_APP.factory('productsFactory', function () {
  var factory = {};
  var products = [
    {
      id: 1,
      name: 'Eligendi ponderum',
      imageUrl: 'src/img/prod.png',
      description: 'Posse adipiscing delicatissimi an vim, et iisque erroribus sea. Tritani percipitur sit eu, maiorum recteque iracundia vis an. Vix phaedrum vituperata honestatis ex. Nonumy dissentias usu no. Ex pro vocent eripuit aliquam, ad vim malis omnium, ad duo latine viderer dissentiet. Nonumy maiestatis cu mea, cu lorem dolor vis.',
      isBooked: false
    },
    {
      id: 2,
      name: 'Iusto soluta inermis',
      imageUrl: 'src/img/prod.png',
      description: 'Sit officiis contentiones ut. At mea ullum appellantur, has ex vidit albucius. Usu cu legere impetus tibique. Viris latine consetetur et usu. Sea ut cetero voluptaria disputando, labores fuisset indoctum duo in. Ut pro case probo, te cum adhuc maiestatis.',
      isBooked: true
    },
    {
      id: 3,
      name: 'Omnis movet interpretaris',
      imageUrl: 'src/img/prod.png',
      description: 'Eu vim zril interpretaris, posse instructior no vim. Sumo probo tamquam et per, id partem tamquam meliore has, mel placerat apeirian facilisis ex. Ne graeco appellantur liberavisse cum, an mea erant inermis accumsan. Dicit percipitur ut vix. Scripta nominavi accommodare eum no, et nam corpora ocurreret, ad paulo soluta similique.',
      isBooked: true
    },
    {
      id: 4,
      name: 'Vix eu movet',
      imageUrl: 'src/img/prod.png',
      description: 'Sit officiis contentiones ut. At mea ullum appellantur, has ex vidit albucius. Usu cu legere impetus tibique. Viris latine consetetur et usu. Sea ut cetero voluptaria disputando, labores fuisset indoctum duo in. Ut pro case probo, te cum adhuc maiestatis.',
      isBooked: false
    },
    {
      id: 5,
      name: 'Voluptua laboramus',
      imageUrl: 'src/img/prod.png',
      description: 'Quot saperet vix cu, eu mel posse timeam reprehendunt, pro in veniam vidisse convenire. Ad clita placerat vel, usu ut scripta nominati. Id cetero detracto intellegebat eum, ad nostro docendi his, vis in utroque vivendo aliquando. Est ex nisl scriptorem, his no legimus omnesque urbanitas. Ad eum dicta vitae.',
      isBooked: false
    }
  ];

  factory.getProducts = function () {
    return products;
  }

  factory.addProduct = function (product) {
    products.push(product);
  }

  factory.getProductById = function (id) {
    var product;
    products.some(function(productItem) {
      var result = false;
      if (productItem.id == id) {
        result = true;
        product = productItem;
      }
      return result;
    });
    return product;
  }
  return factory;
});