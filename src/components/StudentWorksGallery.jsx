import FilterSidebar from '../../shoxa/FilterSidebar'
import VehicleGridCard from '../../samandar/VehicleGridCard'
import VehicleListCard from '../../samandar/VehicleListCard'
import Pagination from '../../mushtariy/Pagination'
import MediaGallery from '../../xumoyun/MediaGallery'
import DetailHeader from '../../diyor/DetailHeader'
import TechnicalSpecs from '../../diyor/TechnicalSpecs'
import RecommendedCarousel from '../../islom/RecommendedCarousel'
import SellerCard from '../../dinislom/SellerCard'
import ContactForm from "../../abdumo'min/ContactForm"
import AuthModal from '../../sharipov/AuthModal'
import DashboardSidebar from '../../shohobiddin/DashboardSidebar'
import MyListingsTable from '../../shoxa/MyListingsTable'
import SavedCarsGrid from '../../samandar/SavedCarsGrid'
import FormStepper from '../../islom/FormStepper'
import VehicleBasicInfoForm from '../../shoxa/VehicleBasicInfoForm'
import ImageUploadZone from "../../abdumo'min/ImageUploadZone"
import PricingAndSubmitForm from "../../abdumo'min/PricingAndSubmitForm"
import BlogHome from '../../xumoyun/BlogHome'
import ArticleCard from '../../shohobiddin/ArticleCard'
import CompareMatrix from '../../sharipov/CompareMatrix'
import StaticInfo from '../../baxtiyorov/StaticInfo'
import HeroBanner from '../../xumoyun/HeroBanner'

const Section = ({ title, student, children }) => (
  <div className="border border-gray-200 rounded-xl p-5 bg-white">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">{student}</span>
      <h2 className="text-sm font-bold text-slate-900">{title}</h2>
    </div>
    {children}
  </div>
)

const StudentWorksGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Student Works Gallery</h1>
        <p className="text-sm text-slate-500 mt-1">Barcha talaba komponentlari bir sahifada</p>
      </div>

      {/* Sharipov — 9/10 */}
      <Section title="Navbar + AuthModal + CompareMatrix" student="Sharipov">
        <div className="relative h-[400px] overflow-hidden rounded-xl border border-gray-100 mb-4">
          <AuthModal />
        </div>
        <div className="mb-4">
          <CompareMatrix />
        </div>
      </Section>

      {/* Xumoyun — 8/10 */}
      <Section title="BlogHome + HeroBanner + MediaGallery" student="Xumoyun">
        <p className="text-xs text-slate-500 mb-3">HeroBanner quyida:</p>
        <HeroBanner />
        <div className="mt-4">
          <MediaGallery />
        </div>
        <div className="mt-4">
          <BlogHome />
        </div>
      </Section>

      {/* Shoxa — 8/10 */}
      <Section title="VehicleBasicInfoForm + FilterSidebar + MyListingsTable" student="Shoxa">
        <div className="flex gap-6 mb-4">
          <FilterSidebar />
          <div className="flex-1 min-h-[300px] bg-gray-50 rounded-lg flex items-center justify-center text-xs text-slate-400">Katalog kontenti</div>
        </div>
        <VehicleBasicInfoForm />
        <div className="mt-4">
          <MyListingsTable />
        </div>
      </Section>

      {/* Abdumo'min — 7/10 */}
      <Section title="ImageUploadZone + ContactForm + PricingAndSubmitForm" student="Abdumo'min">
        <ImageUploadZone />
        <ContactForm />
        <PricingAndSubmitForm />
      </Section>

      {/* Samandar — 7/10 */}
      <Section title="VehicleGridCard + VehicleListCard + SavedCarsGrid" student="Samandar">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <VehicleGridCard />
          <VehicleGridCard />
          <VehicleGridCard />
        </div>
        <VehicleListCard />
        <SavedCarsGrid />
      </Section>

      {/* Shohobiddin — 6/10 */}
      <Section title="DashboardSidebar + ArticleCard" student="Shohobiddin">
        <div className="flex gap-4 mb-4">
          <DashboardSidebar />
          <div className="flex-1 min-h-[200px] bg-gray-50 rounded-lg flex items-center justify-center text-xs text-slate-400">Dashboard kontenti</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </Section>

      {/* Islom — 5/10 */}
      <Section title="FormStepper + RecommendedCarousel" student="Islom">
        <FormStepper />
        <RecommendedCarousel />
      </Section>

      {/* Diyor — 5/10 */}
      <Section title="DetailHeader + TechnicalSpecs" student="Diyor">
        <DetailHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <TechnicalSpecs />
          <div className="bg-gray-50 rounded-lg min-h-[200px] flex items-center justify-center text-xs text-slate-400">Qo'shimcha ma'lumot</div>
        </div>
      </Section>

      {/* Mushtariy — 3/10 */}
      <Section title="Pagination" student="Mushtariy">
        <Pagination />
      </Section>

      {/* Dinislom — 3/10 */}
      <Section title="SellerCard" student="Dinislom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
      </Section>

      {/* Baxtiyorov — 2/10 */}
      <Section title="StaticInfo" student="Baxtiyorov">
        <StaticInfo />
      </Section>
    </div>
  )
}

export default StudentWorksGallery
