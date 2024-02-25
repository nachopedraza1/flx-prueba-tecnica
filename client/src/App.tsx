import './App.css';
import { FilterBar } from './components/ui';
import { UsersTable } from './components/tables';
import { MainLayout } from './components/layouts';


const App = () => {

  return (
    <MainLayout>
      <FilterBar />
      <UsersTable />
    </MainLayout>
  )
}

export default App;
