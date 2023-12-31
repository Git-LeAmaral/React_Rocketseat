import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as styles from './styles'
import { MinutesAmountInput, TaskInput } from './styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <styles.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <styles.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto1" />
            <option value="Projeto1" />
            <option value="Projeto1" />
            <option value="Projeto1" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <styles.StartCoundownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </styles.StartCoundownButton>
      </form>
    </styles.HomeContainer>
  )
}
