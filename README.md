# Здесь хранятся мои шаблоны для быстрого создания фичей

### 1. [Создание кнопки в разделе аналитики](./sources/widgetButtonCreation.js)

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
