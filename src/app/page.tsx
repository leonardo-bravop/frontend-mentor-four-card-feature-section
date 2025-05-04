import Card from "@/components/Card";
import supervisorSrc from "@images/icon-supervisor.svg";
import teamBuilderSrc from "@images/icon-team-builder.svg"
import karmaSrc from "@images/icon-karma.svg"
import calculatorSrc from "@images/icon-calculator.svg"
import colors from "../styles/variables.module.scss";

const gridAreas = ["a", "b", "c", "d"]

export default function Home() {
  return (
    <div>
      <main>
        <section className="headline">
          <h2>Reliable, efficient delivery</h2>
          <h1>Powered by Technology</h1>
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
        </section>
        <div className="card-section">
          <Card title="Supervisor" description="Monitors activity to identify project roadblocks" imageSrc={supervisorSrc.src} color={colors.cyan} gridArea={gridAreas[0]}/>
          <Card title="Team Builder" description="Scans our talent network to create the optimal team for your project" imageSrc={teamBuilderSrc.src} color={colors.red} gridArea={gridAreas[1]}/>
          <Card title="Karma" description="Regularly evaluates our talent to ensure quality" imageSrc={karmaSrc.src} color={colors.orange} gridArea={gridAreas[2]}/>
          <Card title="Team Builder" description="Scans our talent network to create the optimal team for your project" imageSrc={calculatorSrc.src} color={colors.blue} gridArea={gridAreas[3]}/>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
