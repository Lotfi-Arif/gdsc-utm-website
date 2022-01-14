export const style = `
h2 {
  margin: 25px;
  padding: var(--spacing-l) 0;
  text-align: center;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
kk-labeled-avatar,
kk-labeled-url-icon {
  padding: var(--spacing-m);
}
.items-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.resource-wrapper {
  padding-left: var(--spacing-l);
}
.resource-wrapper > p {
  margin: 0;
  padding: var(--spacing-s) 0;
}
.news-wrapper > li kk-labeled-avatar{
  padding: var(--spacing-m);
  align-items: center;
  object-fit: cover;
}
`;