import { Play } from 'phosphor-react'
import * as styles from './styles'
import { MinutesAmountInput, TaskInput } from './styles'

export function Home() {
  return (
    <styles.HomeContainer>
      <form action="">
        <styles.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />

          <span>minutos.</span>
        </styles.FormContainer>

        <styles.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <styles.Separator>:</styles.Separator>
          <span>0</span>
          <span>0</span>
        </styles.CountdownContainer>

        <styles.StartCoundownButton disabled type="submit">
          <Play size={24} />
          Começar
        </styles.StartCoundownButton>
      </form>
    </styles.HomeContainer>
  )
}
