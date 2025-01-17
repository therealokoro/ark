import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { getValidChildren, type ComponentWithProps } from '../utils'
import { usePopoverContext } from './popover-context'

export type PopoverContentProps = HTMLArkProps<'div'>

export const PopoverContent: ComponentWithProps<PopoverContentProps> = defineComponent({
  name: 'PopoverContent',
  setup(_, { slots, attrs }) {
    const api = usePopoverContext()

    return () => (
      <ark.div {...api.value.contentProps} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.div>
    )
  },
})
