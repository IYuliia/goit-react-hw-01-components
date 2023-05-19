import StatisticsItem from './StatisticsItem';

export default function Statistics({ title, stats }) {
  return (
    <>
      <section className="statistics">
        <h2 className="title">{title}</h2>
        <StatisticsItem data={stats} />
      </section>
    </>
  );
}
