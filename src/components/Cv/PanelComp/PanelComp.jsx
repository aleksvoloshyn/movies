import {
  Panel,
  Avatar,
  PanelSection,
  PanelHeader,
  PanelItems,
  PanelItem,
  PanelItemLink,
} from './panel.styled'

import avatar from './../../../images/Alex.jpg'
import {
  languages,
  hardskills,
  softskills,
  methodologies,
} from './../Data/skills'

const PanelComp = () => {
  return (
    <>
      <Panel>
        <Avatar src={avatar} width={350} />

        <PanelSection>
          <PanelHeader>CONTACTS</PanelHeader>
          <PanelItems>
            <PanelItem>
              <PanelItemLink href="tel:+380935007030">
                +38(093)5007030
              </PanelItemLink>
            </PanelItem>
            <PanelItem>
              <PanelItemLink href="mailto:alexx.voloshyn@gmail.com">
                alexx.voloshyn@gmail.com
              </PanelItemLink>
            </PanelItem>
            <PanelItem>telegram: @alex_vlshn</PanelItem>
            <PanelItem>
              {' '}
              <PanelItemLink href="https://www.linkedin.com/in/oleksii-voloshyn-118405aa/">
                https://www.linkedin.com/in/oleksii-voloshyn-118405aa/
              </PanelItemLink>
            </PanelItem>
            <PanelItem>
              {' '}
              <PanelItemLink href="https://github.com/aleksvoloshyn">
                https://github.com/aleksvoloshyn
              </PanelItemLink>
            </PanelItem>
            <PanelItem>Ukraine, Chernyhiv</PanelItem>
          </PanelItems>
        </PanelSection>

        <PanelSection>
          <PanelHeader>HARD SKILLS</PanelHeader>
          <PanelItems>
            {hardskills.map((hard) => {
              return <PanelItem key={hard.id}>{hard.title}</PanelItem>
            })}
            <p style={{ marginTop: '20px', fontWeight: '700' }}>
              Methodologies:
            </p>
            {methodologies.map((meth) => {
              return <PanelItem key={meth.id}>{meth.title}</PanelItem>
            })}
          </PanelItems>
        </PanelSection>

        <PanelSection>
          <PanelHeader>SOFT SKILLS</PanelHeader>
          <PanelItems>
            {softskills.map((soft) => {
              return <PanelItem key={soft.id}>{soft.title}</PanelItem>
            })}
          </PanelItems>
        </PanelSection>

        <PanelSection>
          <PanelHeader>LANGUAGES</PanelHeader>
          <PanelItems>
            {languages.map((lang) => {
              return <PanelItem key={lang.id}>{lang.title}</PanelItem>
            })}
          </PanelItems>
        </PanelSection>
      </Panel>
    </>
  )
}

export default PanelComp
