import Header from '../components/Header';
import ContentContainer from '../components/ContentContainer';
import SalesOverview from '../components/dashboard_content/SalesOverview';
import BarChartComponent from '../components/dashboard_content/BarChartComponent';
import TopProducts from '../components/dashboard_content/TopProducts';
import CustomerFulfilment from '../components/dashboard_content/CustomerFulfilment';
import Earnings from '../components/dashboard_content/Earnings';
import VisitorInsights from '../components/dashboard_content/VisitorInsights';

const Panel = () => {
  return (
    <div className="bg-[#171821] min-h-screen">
      <Header />

      {/* Configuramos una columna en dispositivos pequeños y 10 columnas en grandes */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Sección: Today's Sales */}
        <div className="lg:col-span-7 flex flex-col min-h-full">
          <ContentContainer 
            title="Today's Sales" 
            subtitle="Sales Summary" 
            sectionNumber="1"
          >
            <SalesOverview />
          </ContentContainer>
        </div>

        {/* Sección: Level */}
        <div className="lg:col-span-3 flex flex-col min-h-full">
          <ContentContainer 
            title="Level" 
            subtitle="" 
            sectionNumber="2"
          >
            <BarChartComponent />
          </ContentContainer>
        </div>

        {/* Sección: Top Products */}
        <div className="lg:col-span-7 flex flex-col min-h-full">
          <ContentContainer 
            title="Top Products" 
            subtitle="" 
            sectionNumber="3"
          >
            <TopProducts />
          </ContentContainer>
        </div>

        {/* Sección: Customer Fulfilment */}
        <div className="lg:col-span-3 flex flex-col min-h-full">
          <ContentContainer 
            title="Customer Fulfilment" 
            subtitle="" 
            sectionNumber="4"
          >
            <CustomerFulfilment />
          </ContentContainer>
        </div>

        {/* Sección: Earnings */}
        <div className="lg:col-span-3 flex flex-col min-h-full">
          <ContentContainer 
            title="Earnings" 
            subtitle="" 
            sectionNumber="5"
          >
            <Earnings />
          </ContentContainer>
        </div>

        {/* Sección: Visitor Insights */}
        <div className="lg:col-span-7 flex flex-col min-h-full">
          <ContentContainer 
            title="Visitor Insights" 
            subtitle="" 
            sectionNumber="6"
          >
            <VisitorInsights />
          </ContentContainer>
        </div>
      </div>
    </div>
  );
};

export default Panel;
