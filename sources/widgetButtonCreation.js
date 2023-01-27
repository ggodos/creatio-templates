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
      this.view = this.Ext.create("Terrasoft.Button", {
        renderTo: renderTo,
        id: "buttonId",
        className: "Terrasoft.Button",
        caption: "Нажми меня",
        click: {
          bindTo: "onClickHandler",
        },
        style: this.Terrasoft.controls.ButtonEnums.style.GREEN,
      });
      this.view.bind(this.viewModel);

      return this.view;
    },

    destroy: function () {
      this.view.destroy();
      this.viewModel.destroy();
    },
  });
  return Terrasoft.CustomName;
});
