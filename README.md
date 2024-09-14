 # Anim_Slides

Разработанный проект представляет собой демонстрацию работы компонента анимированных обложек страницы, а также его окружения. 

Проект реализован с использованием технологий Nuxt 3 Composition API, GSAP, TypeScript, Shadcn-vue и Tailwind CSS.

## Описание структуры проекта
```bash
nuxt-project/
├── public/            # Статические изображения
├── assets/            # Стили и иконки
├── components/        # Компоненты Vue
├── pages/             # Представления (страницы)
├── layouts/           # Лейауты проекта
├── services/          # Методы апи сущностей проекта
├── models/            # Интерфейсы сущностей проекта
├── app.vue            # Основной компонент приложения
```

## Описание ключевых компонентов
### SlidesCover. Компонент анимированных обложек
```bash
components/homepage/SlidesCover/SlidesCover.vue
```
PROPS:
```bash
value: {
    type: Array<CoverModel>,
    default: []
}

-- Принимает массив объектов, содержащих информацию об обложках
   Интерфейс объекста обложки описан: models/cover.model.ts
```

```bash
titlePath: {
    type: String,
    default: ''
}

-- Принимает src последней overlay обложки, являющейся тайтлом страницы
   При отсутствии - не отображается
```

```bash
mainBgPath: {
    type: String,
    default: ''
},

-- Принимает src первой встречающей обложки
   При отсутствии - не отображается
```


### HomepageBar. Компонент фильтров 

```bash
components/homepage/HomepageBar/HomepageBar.vue
```
Содержит компоненты HomepageBarSelect и HomepageBarLink, эмулирующие фильтры поиска

### Promotion. Строка уведомлений
```bash
components/layouts/Promotion.vue
```

PROPS:
```bash
value: {
    type: String,
    default: ''
}

-- Принимает объект promotion, содержащий имя кнопки, уведомление и ссылку
   Интерфейс объекта Promotion описан: models/promotion.model.ts
```
