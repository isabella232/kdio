import React from 'react'
import AutoSuggest from 'react-autosuggest'
import { Dropdown, DropdownMenu } from 'rebass'
import { connectHighlight } from 'react-instantsearch/connectors'

import Block from 'components/Block'

import SearchBox from './SearchBox'
import { toSuggestions, refineValue, cleanValue } from './helpers'

const SearchAutoComplete = ({ hits, query, refine, theme }) => {

  return (
    <AutoSuggest
      suggestions={toSuggestions({ hits })}
      getSectionSuggestions={section => section.hits}
      onSuggestionsFetchRequested={refineValue(refine)}
      onSuggestionsClearRequested={cleanValue(refine)}
      getSuggestionValue={hit => hit.title}
      renderSuggestion={renderSuggestion}
      renderInputComponent={renderInputComponent}
      alwaysRenderSuggestions={false}
      renderSuggestionContainer={renderSuggestionContainer}
      inputProps={{ value: query, onChange: () => {} }}
    />
  )
}
const renderInputComponent = (props) => (
  <SearchBox inputProps={props} />
)

const renderSuggestionContainer = ({ children, ...props }) => {

  return (
    <div {...props} className='SuggestionContainer'>
      {children}
    </div>
  )
}

const Highlighter = connectHighlight(({hit, attributeName, highlight, highlightProperty}) => {
  const parsedHighlightedValue = highlight({hit, attributeName, highlightProperty});
  const reactHighlighted = parsedHighlightedValue.map((v, i) => {
    const key = `split-${i}-${v.value}`;
    if (!v.isHighlighted) {
      return <span key={key}>{v.value}</span>;
    }
    return <strong key={key} style={{ fontWeight: 600 }}>{v.value}</strong>;
  });
  return <span className="ais-Highlight">{reactHighlighted}</span>;
})

const renderSuggestion = (hit) => {

  const hightlighterProps = {
    hit,
    attributeName: 'title',
    highlightProperty: '_highlightResult'
  }

  return (
    <Block>
      <Highlighter {...hightlighterProps} />
    </Block>
  )
}

export default SearchAutoComplete
