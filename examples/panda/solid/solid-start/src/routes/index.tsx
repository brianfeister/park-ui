import { Title } from 'solid-start'
import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from '~/components/examples/authentication-card'
import { DatePickerDemo } from '~/components/examples/date-picker-demo'

export default function Home() {
  return (
    <main>
      <Title>Welcome to Park UI</Title>
      <Container py={{ base: '16', md: '24' }}>
        <DatePickerDemo />
        <AuthenticationCard />
      </Container>
    </main>
  )
}
