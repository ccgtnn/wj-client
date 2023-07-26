import AppButton from '@/components/app/AppButton.vue'
import AppCard from '@/components/app/AppCard.vue'
import AppH1 from '@/components/app/AppH1.vue'
import AppH2 from '@/components/app/AppH2.vue'

import IconClose from '@/components/app/icons/IconClose.vue'
import IconCaretDown from '@/components/app/icons/IconCaretDown.vue'

export default function (app) {
  app.component('AppButton', AppButton)
  app.component('AppCard', AppCard)
  app.component('AppH1', AppH1)
  app.component('AppH2', AppH2)

  app.component('IconClose', IconClose)
  app.component('IconCaretDown', IconCaretDown)
}
