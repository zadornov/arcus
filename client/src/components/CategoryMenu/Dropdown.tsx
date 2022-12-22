import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
import categories from '../../categories';
import SelectWrapper from '../shared/form/SelectWrapper';

const Dropdown = styled.select`
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 8px 16px;
  background-color: ${(props: any) => props.theme.foreground};
  font-size: 15px;
  color: ${(props: any) => props.theme.normalText};
  appearance: none;
`;

class CategoryMenuDropdown extends React.Component {
  mapCategories = () =>
    ['all', ...categories].map((category, index) => (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <option key={index} value={category}>
        {category}
      </option>
    ));

  handleOnChange = (event: any) => {
    const category = event.target.value;
    // @ts-expect-error TS(2339): Property 'category' does not exist on type 'Readon... Remove this comment to see the full error message
    if (category !== this.props.category) {
      const url = category === 'all' ? '/' : `/a/${category}`;
      // @ts-expect-error TS(2339): Property 'history' does not exist on type 'Readonl... Remove this comment to see the full error message
      this.props.history.push(url);
    }
  };

  render() {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <SelectWrapper flex>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Dropdown value={this.props.category} onChange={this.handleOnChange}>
          {this.mapCategories()}
        </Dropdown>
      </SelectWrapper>
    );
  }
}

export default CategoryMenuDropdown;
