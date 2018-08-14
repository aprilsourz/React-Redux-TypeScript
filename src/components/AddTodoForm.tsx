import * as React from 'react'
import { FormEvent } from 'react';

interface Props {
  handleSubmit: (value: string) => void
}

interface State {
  value: string
}

export default class AddTodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { value: '' }
    this.updateValue = this.updateValue.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  private updateValue(value: string) {
    this.setState({ value })
  }

  private handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })

  }

  render() {
    const { value } = this.state
    const { updateValue, handleSubmit } = this
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => updateValue(e.target.value)} />
        <button type="submit">Add todo !</button>
      </form>
    )
  }
}