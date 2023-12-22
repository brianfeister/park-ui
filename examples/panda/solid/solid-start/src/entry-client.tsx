import { mount, StartClient } from 'solid-start/entry-client'

 // Prepare global object expected by Solid's hydration logic
 if (!(window as any)._$HY) {
  (window as any)._$HY = { events: [], completed: new WeakSet(), r: {} };
}

mount(() => <StartClient />, document)
