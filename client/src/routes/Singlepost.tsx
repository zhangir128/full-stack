import { Link } from "react-router-dom";
import Image from "../components/Image";
import Search from "../components/Search";

const Singlepost: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/*details*/}
      <div className="flex gap-8">
        <div className="lg w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Информация о системе образования в Казахстане
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="">Опубликовано</span>
            <span>2 дня назад в</span>
            <Link to="/test" className="text-blue-800">
              Архитектура
            </Link>
          </div>
          <p className="text-gray-500 font-medium">
            Обязательное образование в Казахстане предусматривает обучение в
            течение 12 лет. Как правило, дети начинают ходить в школу в возрасте
            шести или семи лет. С трёх до шести лет они могут посещать детские
            сады (дошкольные учреждения).
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            src="/ktj/stepe.jpg"
            alt="first post"
            className="rounded-2xl object-cover w-full h-full"
            w="600"
          />
        </div>
      </div>
      {/*content*/}
      <div className="flex flex-col md:flex-row gap-8">
        {/*text*/}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Единственный акционер Единственным акционером компании является
            национальный фонд «Самрук-Казына», 100 % акций которого
            контролируется Правительством Республики Казахстан (через Комитет
            государственного имущества и приватизации в составе Министерства
            финансов РК). Финансовое положение Начиная с 2020 года, наблюдается
            улучшение финансовых показателей компании. В течение трех лет
            выручка компании показывает устойчивую динамику роста, поднявшись с
            1,3 трлн тенге в 2021 году до почти 2 трлн тенге в 2023 году. По
            итогам 2023 года прибыль составила 134 млрд тенге, что в 4 раза
            больше 2022 года. Это наилучший показатель компании за последние 10
            лет. Стабильное финансовое положение АО «НК "ҚТЖ» подтверждается
            уровнем кредитных рейтингов от международных рейтинговых агентств и
            доверием со стороны международных финансовых институтов,
            предоставляющих Компании кредитные средства и гарантии (Moody’s
            Investors Service – кредитный рейтинг «Baa3», прогноз «Стабильный»;
            FitchRatings – кредитный рейтинг «BBB-», прогноз «Стабильный»; S&P –
            кредитный рейтинг «BB», прогноз «Стабильный»; Moody’s ESG Solutions
            - ESG рейтинг - А2, 57 баллов). В число крупных индустриальных
            проектов, реализуемых КТЖ, входят две транзитные магистрали
            стратегического значения (Хоргос — Жетыген и Узень — госграница с
            Туркменистаном) и четыре крупных машиностроительных предприятия
            (локомотивосборочный завод, завод по сборке электровозов в Астане,
            завод по производству пассажирских вагонов в Астане и завод по
            сборке грузовых вагонов в Экибастузе). 3
          </p>
          <p>
            июля 2012 года в Казахстане началось строительство сразу двух новых
            магистралей внутригосударственного сообщения[8]: Аркалык — Шубарколь
            (214 км) и Жезказган — Саксаульская (517 км) — Шалкар — Бейнеу (496
            км). Строительство линий было завершено в августе 2014 года[9]. В
            2021 года начали электрифицировать однопутный участок Достык –
            Мойынты[10], а 17 ноября 2022 года, началось строительство вторых
            путей[11]. ТОО «Казахстанская вагоностроительная компания» (КВК).
            Проектная мощность завода составит до 3000 полувагонов в год. В 2011
            году выпущено 250 первых полувагонов. Казахстанское содержание по
            проекту составляет 92 %. Жетыген — Коргас. Протяжённость дороги
            составляет более 293 км с сопутствующей инфраструктурой: 4
            промежуточные станции, 10 разъездов, мосты (в том числе мост через
            Или длиной 950 м) и перегрузочный комплекс на станции Алтынколь.
            Ожидается, что по этой железнодорожной ветке ежегодно будет
            проходить до 13 млн тонн грузов. Ввод первого пускового комплекса
            линии состоялся 9 декабря 2011 года[12]. Магистраль Узень —
            государственная граница с Туркменистаном. Это 146-километровый
            участок международного проекта Узень — Кызылкая — Берекет — Этрек —
            Горган, реализуемый Казахстаном, Ираном и Туркменистаном. Данный
            маршрут позволит сократить путь из центра Евразии до иранских
            морских портов более чем на 600 км. Планируемый грузооборот линии до
            10 млн тонн в год. Казахский участок дороги был открыт 9 декабря
            2011 года[13]. В число крупных индустриальных проектов, реализуемых
            КТЖ, входят две транзитные магистрали стратегического значения
            (Хоргос — Жетыген и Узень — госграница с
          </p>
          <p>
            Туркменистаном) и четыре крупных машиностроительных предприятия
            (локомотивосборочный завод, завод по сборке электровозов в Астане,
            завод по производству пассажирских вагонов в Астане и завод по
            сборке грузовых вагонов в Экибастузе). 3 июля 2012 года в Казахстане
            началось строительство сразу двух новых магистралей
            внутригосударственного сообщения[8]: Аркалык — Шубарколь (214 км) и
            Жезказган — Саксаульская (517 км) — Шалкар — Бейнеу (496 км).
            Строительство линий было завершено в августе 2014 года[9]. В 2021
            года начали электрифицировать однопутный участок Достык –
            Мойынты[10], а 17 ноября 2022 года, началось строительство вторых
            путей[11]. ТОО «Казахстанская вагоностроительная компания» (КВК).
            Проектная мощность завода составит до 3000 полувагонов в год. В 2011
            году выпущено 250 первых полувагонов. Казахстанское содержание по
            проекту составляет 92 %. Жетыген — Коргас. Протяжённость дороги
            составляет более 293 км с сопутствующей инфраструктурой: 4
            промежуточные станции, 10 разъездов, мосты (в том числе мост через
            Или длиной 950 м) и перегрузочный комплекс на станции Алтынколь.
            Ожидается, что по этой железнодорожной ветке ежегодно будет
            проходить до 13 млн тонн грузов. Ввод первого пускового комплекса
            линии состоялся 9 декабря 2011 года[12]. Магистраль Узень —
            государственная граница с Туркменистаном. Это 146-километровый
            участок международного проекта Узень — Кызылкая — Берекет — Этрек —
            Горган, реализуемый Казахстаном, Ираном и Туркменистаном. Данный
            маршрут позволит сократить путь из центра Евразии до иранских
          </p>
          <p>
            морских портов более чем на 600 км. Планируемый грузооборот линии до
            10 млн тонн в год. Казахский участок дороги был открыт 9 декабря
            2011 года[13]. Завод по производству современных электровозов в г.
            Астане «Электровоз құрастыру зауыты». Открытие завода состоялось в
            декабре 2012 года. Alstom-TMX поставит оборудование для
            производственной линии, мощность которой составляет 50-80
            электровозов в год. В дальнейшем предполагается поэтапная
            локализация производства комплектующих для электровозов на
            территории Казахстана. Казахстанское содержание при этом поднимется
            до 72 %. Завод по выпуску пассажирских вагонов «Тулпар-Тальго» в г.
            Астане. Проектная мощность предприятия — 150 вагонов в год, на
            начальных этапах производства — от 30 до 140 вагонов в год.
            Конструкционная скорость вагонов — 200 км/ч, что позволяет
            использовать их в скоростном движении. Уровень казахстанского
            содержания в производстве к 2015 году достигнет 56 %. Центр
            технологий на транспорте в г. Астане. В сентябре 2012 года в Астане
            Центр технологий на транспорте — современное учебное заведение для
            работников производственного профиля и менеджеров железнодорожного
            транспорта. В среднем, ежегодно более 90 000 работников (56 % всего
            персонала) проходят обучение, в том числе в странах ближнего и
            дальнего зарубежья. С вводом в эксплуатацию Центра технологий на
            транспорте планируется, что процент обучаемых достигнет 66. Центр
            рассчитан на обучение до 15 000 человек в год. В целом по данной
            программе, рассчитанной до 2020 года, планируется обучить около 6
            000 работников Компании. Строительство сети ТЛЦ на территории
            Казахстана — инвестиционный проект, предполагающий создание сети
            современных транспортно-логистических центров в наиболее
            перспективных с точки зрения логистического потенциала регионах
            Казахстана. В настоящее время проект находится на стадии разработки
            ТЭО, осуществляемой казахстанской компанией ТОО «ЖасампазАлем» с
            участием международных экспертов.[14]
          </p>
        </div>
        {/*menu*/}
        <div className="px-4 h-max top-8 sticky">
          <h1 className="mt-4 mb-4 text-sm font-medium">Разделы</h1>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/posts" className=" hover:bg-blue-50 rounded-full">
              Все статьи
            </Link>
            <Link
              to="/posts?cat=web-design"
              className="hover:bg-blue-50 rounded-full"
            >
              Архитектура
            </Link>
            <Link
              to="/posts?cat=city"
              className="hover:bg-blue-50 rounded-full"
            >
              Поезда
            </Link>
            <Link
              to="/posts?cat=trains"
              className="hover:bg-blue-50 rounded-full"
            >
              Бизнес
            </Link>
            <Link
              to="/posts?cat=industry"
              className="hover:bg-blue-50 rounded-full"
            >
              Расписание
            </Link>
            <Link
              to="/posts?cat=database"
              className="hover:bg-blue-50 rounded-full"
            >
              База данных
            </Link>
          </div>
          <h1 className="mt-4 mb-4 text-sm font-medium">Поиск</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Singlepost;
