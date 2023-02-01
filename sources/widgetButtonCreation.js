define("CustomName", ["terrasoft", "ext-base"], function () {
  Ext.define("Terrasoft.configuration.CustomName", {
    extend: "Terrasoft.BaseModel",
    alternateClassName: "Terrasoft.CustomName",
    Ext: null,
    sandbox: null,
    Terrasoft: null,
    viewModel: null,
    view: null,
    init: function () {
      this.initViewModel();
    },
    initViewModel: function () {
      this.viewModel = Ext.create("Terrasoft.BaseViewModel", {
        values: {
          clickMessage: "RANDOM TEXT",
        },
        methods: {
          onClickHandler: function () {
            var clickMessage = this.get("clickMessage");
            alert(clickMessage);
            /* КОД ЛОГИКИ КНОПКИ*/
          },
        },
      });
    },
    render: function (renderTo) {
      let firstButtonView = this.Ext.create("Terrasoft.Button", {
        renderTo: renderTo,
        id: "mainPageButton",
        className: "Terrasoft.Button",
        caption: "Кнопка 1",
        click: {
          bindTo: "onClickBtn",
        },
        style: this.Terrasoft.controls.ButtonEnums.style.GREEN,
      });

      let secondButtonView = this.Ext.create("Terrasoft.Button", {
        renderTo: renderTo,
        id: "mainPageButton",
        className: "Terrasoft.Button",
        caption: "Кнопка 2",
        click: {
          bindTo: "onClickBtn",
        },
        style: this.Terrasoft.controls.ButtonEnums.style.GREEN,
      });

      firstButtonView.bind(this.viewModel);
      secondButtonView.bind(this.viewModel);

      firstButtonView.render();
      secondButtonView.render();
    },

    destroy: function () {
      this.view.destroy();
      this.viewModel.destroy();
    },
  });
  return Terrasoft.CustomName;
});
