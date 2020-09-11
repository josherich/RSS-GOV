const template_page = require('./template_page');

module.exports = ({title, link, image, description, options_list}) => async (ctx) => {
  const _ctx = {
    state: {},
    params: { query: ctx.params.query }
  };

  let items = [];
  for (let i = 0; i < options_list.length; i++) {
    const runner = template_page(options_list[i]);
    await runner(_ctx);
    console.log(_ctx);
    items = items.concat(_ctx.state.data.item);
  };

  ctx.state.data = {
    title: typeof title === 'function' ? title(ctx.params.query) : title,
    link: typeof link === 'function' ? link(ctx.params.query) : link,
    image: typeof image === 'function' ? image(ctx.params.query) : image,
    description: typeof description === 'function' ? description(ctx.params.query) : description,
    item: items
  };
};