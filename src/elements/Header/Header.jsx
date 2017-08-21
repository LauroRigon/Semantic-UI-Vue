import { getChildProps, getElementType } from 'src/lib';

export default {
  name: 'SuiHeader',
  props: {
    sub: Boolean,
  },
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class={`ui${this.sub ? ' sub' : ''} header`}>
        {this.$slots.default}
      </ElementType>
    );
  },
};