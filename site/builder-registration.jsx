import { Builder, BuilderComponent } from '@builder.io/react'
import Header from './components/common/Header'

Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [{ name: 'title', type: 'text' }],
})
