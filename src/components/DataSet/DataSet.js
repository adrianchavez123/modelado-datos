import React, { Component } from 'react';
import { DataTable,TableContainer,Table,TableHead,TableRow,TableHeader ,TableBody,TableCell,DataTableSkeleton} from 'carbon-components-react';
import { Pagination } from 'carbon-components-react';
import Link32 from '@carbon/icons-react/es/link/16';
import dataset from '../../resources/dataset';
const headerData = [
  {
    header: "Año",
    key: "anio",
  },
  {
    header: "Apellido Paterno",
    key: "aPaterno",
  },
  {
    header: "Apellido Materno",
    key: "aMaterno",
  },
  {
    header: "Nombre",
    key: "nombre",
  },
  {
    header: "Nivel",
    key: "nivel",
  },
  {
    header: "Area De Conocimiento",
    key: "area_conocimiento",
  },
  {
    header: "Institucion",
    key: "institucion",
  },
  {
    header: "Pais",
    key: "pais",
  },
  {
    header: "Genero",
    key: "genero",
  },
];

class DataSet extends Component {
  state =  {
    isLoading : true,
    rowData: [],
    error : null
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const temp = dataset.map( d => {
      const {_id:id,anio,aPaterno,aMaterno,nombre,areaConocimiento:{nombre: area_conocimiento},nivel,institucion,pais: {nombre: pais},genero} = d;
      return {
        id,
        anio,
        aPaterno,
        aMaterno,
        nombre,
        nivel,
        area_conocimiento,
        institucion,
        pais,
        genero: (genero === 'F') ? 'Femenino' : 'Masculino'
      }
    });
    const temp2 = temp.filter((f,i) =>  i < 10);
    this.setState({ isLoading: false , rowData: temp2});
  }

  render(){   
  return(
  <div style={{ display:'grid',justifyItems:'center'}}>
    <a id="dataset"></a>
    <h1>Becas Movilidad DataSet</h1>
    { ! this.state.isLoading ? 
      <DataTable isSortable 
        rows={this.state.rowData} 
        headers={headerData} 
        render={({ rows, headers, getHeaderProps }) => (
        <TableContainer title="Becas Movilidad DataSet">
          <Table size='normal'>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
      backwardText="Previous page"
      forwardText="Next page"
      itemsPerPageText="Items per page:"
      page={1}
      pageNumberText="Page Number"
      pageSize={10}
      pageSizes={[
        10,
        20,
        30,
        40,
        50
      ]}
      totalItems={this.state.rowData.length}
    />
      </TableContainer>)}
    /> : <DataTableSkeleton></DataTableSkeleton>}
    <div style={{justifySelf:'start',marginLeft:'20%'}}>
      <h3>Referencias</h3>
      <p><a target="_blank" href="https://datos.gob.mx/busca/dataset?q=becas%20movilidad&"><Link32 style={{background:'white'}}/> https://datos.gob.mx/busca/dataset?q=becas%20movilidad&</a></p>
    </div>
  </div>);
  }
};

export default DataSet;