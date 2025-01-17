import { mergeProps } from '@zag-js/react'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import { forwardRef } from '../forward-ref'
import { type Assign } from '../types'
import { SegmentGroupProvider } from './segment-group-context'
import { parts } from './segment-group.anatomy'
import { useSegmentGroup, type UseSegmentGroupProps } from './use-segment-group'

export type SegmentGroupProps = Assign<HTMLArkProps<'div'>, UseSegmentGroupProps>

export const SegmentGroup = forwardRef<'div', UseSegmentGroupProps>((props, ref) => {
  const [useSegmentGroupProps, divProps] = createSplitProps<UseSegmentGroupProps>()(props, [
    'defaultValue',
    'dir',
    'disabled',
    'form',
    'getRootNode',
    'id',
    'ids',
    'name',
    'onChange',
    'orientation',
    'readOnly',
    'value',
  ])
  const segmentGroup = useSegmentGroup(useSegmentGroupProps)
  const mergedProps = mergeProps(segmentGroup.rootProps, divProps)

  return (
    <SegmentGroupProvider value={segmentGroup}>
      <ark.div {...mergedProps} {...parts.root.attrs} ref={ref} />
    </SegmentGroupProvider>
  )
})
