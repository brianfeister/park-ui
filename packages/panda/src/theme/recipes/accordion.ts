import { accordionAnatomy } from '@ark-ui/anatomy'
import { defineSlotRecipe } from '@pandacss/dev'

export const accordion = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      divideY: '1px',
      width: 'full',
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
    },
    trigger: {
      alignItems: 'center',
      color: 'fg.default',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'semibold',
      gap: '3',
      justifyContent: 'space-between',
      textStyle: 'lg',
      textAlign: 'left',
      width: 'full',
    },
    content: {
      color: 'fg.muted',
      display: 'grid',
      gridTemplateRows: '0fr',
      transitionProperty: 'grid-template-rows, padding-bottom',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
      _open: {
        gridTemplateRows: '1fr',
      },
      '& > div': {
        overflow: 'hidden',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: {
        trigger: {
          py: '4',
        },
        content: {
          pb: '6',
          pr: '8',
          _closed: {
            pb: '0',
          },
        },
      },
    },
  },
})
