# Здесь хранятся мои шаблоны для быстрого создания фичей

## 1. Создание кнопки в разделе аналитики 

### [Исходный код](./sources/widgetButtonCreation.js)

Для создания кнопки нужно:

1. Объявить контекст viewModel

Пример:
```js
    var viewModel = Ext.create("Terrasoft.BaseViewModel", {
      values: {
        // Значения полей
      },
      methods: {
        // Методы
      }
    });
```

2. В методе render: 
    1. Создать объект элемента
    2. Привязать его к viewModel
    3. Вызвать функцию render объекта
```js
    var button = Ext.create("Terrasoft.Button", {
      id: "ButtonId",
      caption: "ButtonCaption",
      click: {bindTo: "func"},
      classes: {
        textClass: ["button-caption-class"]
      },
      style: Terrasoft.controls.ButtonEnums.style.TRANSPARENT
    });
    button.bind(viewModel);
    button.render(Ext.get("ButtonContainerId"));
```

#### Примечание:

Наследуется от Terrasoft.BaseModel, поэтому для работы модуля нужно объявить:
```javascript
    Ext: null,
    sandbox: null,
    Terrasoft: null,
    viewModel: null,
    view: null,
```

viewModel является контекстом выполнения и view в него биндится

Скриншот кнопки:

![Скриншот](./images/analytics_button.png)


## 2. Вызов бизнес процесса через js

```javascript
    func: function() {
        ProcessModuleUtilities.executeProcess({
          sysProcessName: "BusinessProcessName",
          parameters: {
            Param: this.get("ParamField"),
          }
        };);
      }
```

## 3. Указать версию ecmascript

Нужно вставить в начало файла:
```javascript
/*jshint esversion: 6 */
```
