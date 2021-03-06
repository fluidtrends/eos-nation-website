import React from 'react'
import { Screen, Components } from 'react-dom-chunky'

export default class MainDocsScreen extends Screen {

  constructor (props) {
    super(props)
    this.state = { ...this.state }
    this._onSectionSelect = this.onSectionSelect.bind(this)
  }

  componentDidMount () {
    super.componentDidMount()
    this._sections = this.importData('sections')

    if (!this.sections || this.sections.length === 0) {
      return
    }

    var section = this.sections[0]

    if (this.isRootPath) {
      this.setState({ section })
      return
    }

    this.sections.forEach(s => {
      if (!this.isSamePath(this.path, `${this.props.path}/${s.path}`)) {
        return
      }
      section = Object.assign({}, s)
    })

    this.setState({ section })
  }

  get sections () {
    return this._sections || []
  }

  onSectionSelect (section) {
    this.setState({ section })
    this.triggerRedirect(`${this.props.path}/${section.path}`)
  }

  components () {
    return [
      <Components.Dashboard
        sectionsBackgroundColor='#FAFAFA'
        sectionColor='#B0BEC5'
        sectionSelectedColor='#039BE5'
        sections={this.sections}
        section={this.state.section}
        onSectionSelect={this._onSectionSelect}
      />
    ]
  }
}
