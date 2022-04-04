import { Summary } from '../Summary';
import { TransactonsTable } from '../TransactonsTable';
import { Container } from './styles';
export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactonsTable />
        </Container>
    )
}