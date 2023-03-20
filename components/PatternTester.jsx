import { useEffect, useState } from 'react'
import { minimatch } from 'minimatch'

export default function PatternTester ({ pattern, children = '' }) {
  const [pat, setPat] = useState(pattern)
  const [m, setM] = useState(children.props.children.toString().split('\n'))
  const [out, setOut] = useState('')

  useEffect(() => {
    const matches = m.filter(f => minimatch(f, pat))
    setOut(matches.join('\n'))
    console.log(matches)
  }, [pat, m])

  const onChangeM = e => setM(e.target.value.split('\n'))
  const onChangePat = e => setPat(e.target.value)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input type='text' value={pat} onChange={onChangePat} style={{ marginBottom: '1em', padding: '0.5em' }} />
      <textarea cols='30' rows='10' value={m.join('\n')} onChange={onChangeM} style={{ marginBottom: '1em', padding: '0.5em' }} />
      <textarea cols='30' rows='10' disabled value={out} style={{ padding: '0.5em' }} />
    </div>
  )
}
