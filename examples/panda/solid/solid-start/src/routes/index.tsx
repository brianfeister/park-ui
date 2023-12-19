import { Title } from 'solid-start'
import { Container } from 'styled-system/jsx'
import { AuthenticationCard } from '~/components/examples/authentication-card'
import { DatePicker } from '~/components/ui/date-picker'

export default function Home() {
  return (
    <main>
      <Title>Welcome to Park UI</Title>
      <Container py={{ base: '16', md: '24' }}>
        <DatePicker />
        <AuthenticationCard />
      </Container>
    </main>
  )
}
