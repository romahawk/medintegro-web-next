# Content (source of truth)

All business copy lives here.

Locales:
- en
- ua

Rules:
- No long text inside React components.
- Pages must load copy via lib/content/getPage(locale, slug).
- UI components are dumb: they only render props.
