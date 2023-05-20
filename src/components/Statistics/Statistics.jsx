import StatisticsItem from './StatisticsItem';
import { Section, Title } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <>
      <Section className="statistics">
        <Title className="title">{title}</Title>
        <StatisticsItem data={stats} />
      </Section>
    </>
  );
}
