const styles ={
  sectionLayout: {
    backgroundColor: '#fffafa',
    gridColumn: 'span 3'
  },
  asideLayout: {
    gridColumn: '1',
    backgroundColor: '#fafffa'
  },
  headerLayout: {
    gridColumn: '1 / -1',
    backgroundColor: '#fafaff'
  },
  mainLayout: {
    width: '1920px',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '10px',
    // gridTemplateRows: '
  }
};

export default styles;
