export default function Main() {
  return (
    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6 sm:text-5xl">
          Создание сайтов и продуктов в кратчайшие сроки
        </h1>
        <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          от старта до релиза
          <br />
          за пару недель
        </h2>
        <div className="text-center">
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="/"
          >
            <div className="flex text-lg">
              <span className="justify-center">Связаться</span>
            </div>
          </a>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto ml-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt="Placeholder Image"
          src="./images/placeholder.png"
        ></img>
      </div>
      <h2
        className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
        id="products"
      >
        Воплотим ваш:
      </h2>
      <div className="pt-12 max-w-4xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img className="w-16 h-16 mx-auto" src="./icons/browser.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-justify text-white">
            Сайт
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-16 h-16 mx-auto" src="./icons/laptop.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-justify text-white">
            Проект
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img
            className="w-16 h-16 mx-auto"
            src="./icons/call-center.png"
          ></img>
          <h3 class="pt-3 font-semibold text-lg text-justify text-white">
            Сервис
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
        <div class="ktq4">
          <img className="w-16 h-16 mx-auto" src="./icons/smartphone.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-justify text-white">
            Приложение
          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
            porttitor.
          </p>
        </div>
      </div>
      <h2
        className="pt-32 mb-12 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
        id="about"
      >
        Что включено в работу
      </h2>
      <div className="grid-cols-2 sm:grid-cols-1 grid gap-7 md:w-max smx:w-max sm:max-w-4xl mx-auto place-items-center">
        <div className="cnt h-40 w-96 sm:w-11/12 smx:w-80 smx:h-52 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/one.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Разбор задачи
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
        <div className="cnt h-40 w-96 sm:w-11/12 smx:w-80 smx:h-52 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/two.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Анализ
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
        <div className="cnt h-40 w-96 sm:w-11/12 smx:w-80 smx:h-52 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/three.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify smx:text-left text-white smx:w-52">
              Разработка структуры сайта
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
        <div className="cnt h-40 w-96 sm:w-11/12 smx:w-80 smx:h-52 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/four.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Дизайн
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
        <div className="cnt h-40 w-96 sm:w-11/12 smx:w-80 smx:h-52 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/five.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Разработка проекта
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
        <div className="cnt h-40 w-96 sm:w-11/12 smx:w-80 smx:h-52 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/six.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Поддержка
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
          </div>
        </div>
      </div>
      <h2
        className="pt-32 mb-12 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
        id="possibilities"
      >
        Как мы выполняем задачу
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-1 max-w-4xl mx-auto sm:mx-10 px-3 gap-7">
        <div className="h1 sm:h-48 full bg-gradient-to-tr p-px from-primary to-secondary rounded-2xl flex-row flex">
          <div className="flex w-full h-full cnt1 rounded-2xl overflow-hidden relative">
            <img
              className="w-10 sm:w-7 h-10 sm:h-7 ml-3 mt-3 mr-3"
              alt="number"
              src="./numbers/one.png"
            ></img>
            <div className="flex flex-col">
              <h3 class="pt-3-1 smx:pt-md sm:pt-lg font-semibold text-2xl smx:text-xl sm:text-base text-left text-white w-60 sm:w-full">
                Предоставленная фулл-тайм команда
              </h3>
              <p class="pt-5 smx:pt-4 sm:pt-3 pr-3 value-text text-sm sm:text-xs text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
              <img
                className="w-auto h-48 smx:h-44 sm:h-40 absolute smx:left-auto top-28 smx:top-32 sm:top-smx flex self-center pr-16 sm:pr-16"
                alt="image"
                src="./images/com.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="h1 sm:h-48 w-full bg-gradient-to-tr p-px from-primary to-secondary rounded-2xl">
          <div className="flex h-full w-full cnt rounded-2xl overflow-hidden relative">
            <img
              className="w-10 sm:w-7 h-10 sm:h-7 mt-3 ml-3 mr-3"
              alt="number"
              src="./numbers/two.png"
            ></img>
            <div className="flex flex-col">
              <h3 class="pt-3-1 smx:pt-md sm:pt-lg font-semibold text-2xl smx:text-xl sm:text-base text-left text-white w-60 sm:w-full">
                Комфортный запуск
              </h3>
              <p class="pt-5 smx:pt-4 sm:pt-3 pr-3 value-text text-sm sm:text-xs text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
            </div>
            <img
              className="w-auto h-44 smx:h-44 sm:h-32 absolute -right-8 sm:-right-1 left-auto top-32 smx:top-32 sm:top-smxl"
              alt="image"
              src="./images/chart blue.png"
            ></img>
          </div>
        </div>
        <div className="h1 sm:h-48 bg-gradient-to-tr p-px from-primary to-secondary rounded-2xl">
          <div className="flex w-full h-full cnt2 rounded-2xl overflow-hidden relative">
            <img
              className="w-10 sm:w-7 h-10 sm:h-7 mt-3 ml-3 mr-3"
              alt="number"
              src="./numbers/three.png"
            ></img>
            <div className="flex flex-col">
              <h3 class="pt-3-1 smx:pt-md sm:pt-lg font-semibold text-2xl smx:text-xl sm:text-base text-left text-white w-60 sm:w-full">
                Бизнес-партнёрство
              </h3>
              <p class="pt-5 smx:pt-4 sm:pt-3 pr-3 value-text text-sm sm:text-xs text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
              <img
                className="w-auto h-44 smx:h-44 sm:h-32 absolute -right-1 sm:-right-1 left-auto top-32 smx:top-32 sm:top-smxl"
                alt="image"
                src="./images/mountains orange.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="h1 sm:h-48 bg-gradient-to-tr p-px from-primary to-secondary rounded-2xl">
          <div className="flex w-full h-full cnt2 rounded-2xl overflow-hidden relative">
            <img
              className="w-10 sm:w-7 h-10 sm:h-7 mt-3 ml-3 mr-3"
              alt="number"
              src="./numbers/four.png"
            ></img>
            <div className="flex flex-col">
              <h3 class="pt-3-1 smx:pt-md sm:pt-lg font-semibold text-2xl smx:text-xl sm:text-base text-left text-white w-full sm:w-full">
                Удобная коммуникация
              </h3>
              <p class="pt-5 smx:pt-4 sm:pt-3 pr-3 value-text text-sm sm:text-xs text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
              <img
                className="w-auto h-12 smx:h-12 sm:h-10 absolute -right-3 sm:-right-1 left-auto top-40 smx:top-40 sm:top-32"
                alt="image"
                src="./images/Telegram.svg"
              ></img>
              <img
                className="w-auto h-12 smx:h-12 sm:h-10 absolute right-mdx sm:right-mdx left-auto top-md smx:top-md sm:top-36"
                alt="image"
                src="./images/Whatsapp.svg"
              ></img>
              <img
                className="w-auto h-12 smx:h-12 sm:h-10 absolute right-64 sm:right-60 left-auto top-52 smx:top-52 sm:top-40"
                alt="image"
                src="./images/Messenger.svg"
              ></img>
            </div>
          </div>
        </div>
        <div className="h1 sm:h-48 bg-gradient-to-tr p-px from-primary to-secondary rounded-2xl">
          <div className="flex w-full h-full cnt rounded-2xl overflow-hidden relative">
            <img
              className="w-10 sm:w-7 h-10 sm:h-7 mt-3 ml-3 mr-3"
              alt="number"
              src="./numbers/five.png"
            ></img>
            <div className="flex flex-col">
              <h3 class="pt-3-1 smx:pt-md sm:pt-lg font-semibold text-2xl smx:text-xl sm:text-base text-left text-white w-full sm:w-full">
                Рентабельная сборка
              </h3>
              <p class="pt-5 smx:pt-4 sm:pt-3 pr-3 value-text text-sm sm:text-xs text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
              <img
                className="w-auto h-20 smx:h-20 sm:h-16 absolute right-32 sm:right-32 left-auto top-44 smx:top-44 sm:top-36 -rotate-12 transform"
                alt="image"
                src="./images/like.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="cnt1 h1 sm:h-48 bg-gradient-to-tr p-px from-primary to-secondary rounded-2xl">
          <div className="flex w-full h-full cnt1 rounded-2xl relative overflow-hidden">
            <img
              className="w-10 sm:w-7 h-10 sm:h-7 mt-3 ml-3 mr-3"
              alt="number"
              src="./numbers/six.png"
            ></img>
            <div className="flex flex-col">
              <h3 class="pt-3-1 smx:pt-md sm:pt-lg font-semibold text-2xl smx:text-xl sm:text-base text-left text-white w-60 sm:w-full">
                Возможность иного формата работы
              </h3>
              <p class="pt-5 smx:pt-4 sm:pt-3 pr-3 value-text text-sm sm:text-xs text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt a libero in finibus. Maecenas a nisl vitae
                ante rutrum porttitor.
              </p>
              <img
                className="w-auto h-32 smx:h-32 sm:h-28 absolute -right-1 sm:-right-1 left-auto top-36 smx:top-36 sm:top-28"
                alt="image"
                src="./images/lamp orange.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <h2
        className="pt-32 mb-12 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl"
        id="price"
      >
        Стоймость услуг
      </h2>
      <div className="grid-cols-1 grid gap-7 md:w-2/3 smx:2/3 sm:max-w-4xl place-items-center px-3 mx-auto">
        <div className="cnt h-48 w-11/12 sm:w-11/12 smx:w-4/5 smx:h-52 sm:h-60 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/one.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Lorem ipsum dolor
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
            <p className="self-end mr-10 my-auto text-xl bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text">
              000000 р.
            </p>
          </div>
        </div>
        <div className="cnt h-48 w-11/12 sm:w-11/12 smx:w-4/5 smx:h-52 sm:h-60 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/two.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-justify text-white">
              Lorem ipsum dolor
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
            <p className="self-end mr-10 my-auto text-xl bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text inline-block">
              000000 р.
            </p>
          </div>
        </div>
        <div className="cnt h-48 w-11/12 sm:w-11/12 smx:w-4/5 smx:h-52 sm:h-60 border border-gray-700 rounded-2xl flex-row flex">
          <img
            className="w-10 h-10 mt-3 ml-3 mr-3"
            alt="number"
            src="./numbers/three.png"
          ></img>
          <div className="flex-col flex">
            <h3 class="pt-4-1 font-semibold text-lg text-start smx:text-left text-white smx:w-52">
              Lorem ipsum dolor
            </h3>
            <p class="pt-2 pr-3 value-text text-md text-gray-200 fkrr1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
              porttitor.
            </p>
            <p className="self-end mr-10 my-auto text-xl bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text inline-block">
              000000 р.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
