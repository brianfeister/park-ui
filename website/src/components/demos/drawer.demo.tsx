import { Portal } from '@ark-ui/react'
import { XIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import type { DrawerProps } from '~/components/ui/drawer'
import * as Drawer from '~/components/ui/drawer'
import { IconButton } from '~/components/ui/icon-button'

export const Demo = (props: DrawerProps) => {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Title</Drawer.Title>
              <Drawer.Description>Description</Drawer.Description>
              <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
                <IconButton variant="ghost">
                  <XIcon />
                </IconButton>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>{/* Content */}</Drawer.Body>
            <Drawer.Footer gap="3">
              <Drawer.CloseTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.CloseTrigger>
              <Button>Primary</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
