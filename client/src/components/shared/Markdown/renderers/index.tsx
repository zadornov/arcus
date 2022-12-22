import React from 'react';
// @ts-expect-error TS(6142): Module './heading' was resolved to '/home/zadornov... Remove this comment to see the full error message
import headingRenderer from './heading';
// @ts-expect-error TS(6142): Module './link' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import linkRenderer from './link';
// @ts-expect-error TS(6142): Module './code' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import codeRenderer from './code';
// @ts-expect-error TS(6142): Module './inlineCode' was resolved to '/home/zador... Remove this comment to see the full error message
import inlineCodeRenderer from './inlineCode';
// @ts-expect-error TS(6142): Module './table' was resolved to '/home/zadornov/D... Remove this comment to see the full error message
import tableRenderer from './table';
// @ts-expect-error TS(6142): Module './tableCell' was resolved to '/home/zadorn... Remove this comment to see the full error message
import tableCellRenderer from './tableCell';
// @ts-expect-error TS(6142): Module './thematicBreak' was resolved to '/home/za... Remove this comment to see the full error message
import thematicBreakRenderer from './thematicBreak';
// @ts-expect-error TS(6142): Module './list' was resolved to '/home/zadornov/Do... Remove this comment to see the full error message
import listRenderer from './list';

const renderers = {
  heading: headingRenderer,
  link: linkRenderer,
  code: codeRenderer,
  inlineCode: inlineCodeRenderer,
  table: tableRenderer,
  tableCell: tableCellRenderer,
  thematicBreak: thematicBreakRenderer,
  list: listRenderer,
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  html: (props: any) => <p>{props.value}</p>,
};

export default renderers;
