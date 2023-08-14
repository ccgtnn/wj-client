<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'
import MajorEditorSidebar from '@/components/MajorEditorSidebar.vue'
import ArchiveSidebar from '@/components/ArchiveSidebar.vue'
const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('about-page'))
</script>

<template>
  <div class="about-page">
    <div class="about-page__left">
      <div class="about-page__title">
        <AppH1>{{ data?.title }}</AppH1>
      </div>
      <div class="about-page__content">
        <div class="AppH2">
          <AppH2>
            Научно-практический журнал «Водное хозяйство России: проблемы,
            технологии, управление»
          </AppH2>
        </div>

        <div class="regular-text">
          Журнал является периодическим печатным научным рецензируемым журналом.
          Издается с 1999 г. Периодичность выхода журнала – 6 номеров в год.
          Издание журнала осуществляется в рамках государственного задания,
          утвержденного Федеральным агентством водных ресурсов. Учредитель и
          издатель – ФГБУ «Российский научно-исследовательский институт
          комплексного использования и охраны водных ресурсов» (Екатеринбург,
          Россия).
        </div>
        <div class="list">
          <div class="list__content">
            <AppCard>
              <ul>
                <li>
                  <a
                    href="https://waterjournal.ru/files/docs/ISSN.jpg"
                    class="a-regular"
                  >
                    Международный стандартный серийный номер ISSN 1999-4508.
                  </a>
                </li>

                <li>
                  <a
                    href="https://waterjournal.ru/files/docs/eISSN.pdf"
                    class="a-regular"
                  >
                    Электронный международный стандартный серийный номер еISSN
                    2686-8253
                  </a>
                </li>

                <li>
                  <a
                    href="https://waterjournal.ru/files/docs/reg_num_040322.pdf"
                    class="a-regular"
                  >
                    Издание зарегистрировано в Федеральной службе по надзору в
                    сфере связи, информационных технологий и массовых
                    коммуникаций 4 марта 2022 г., регистрационный номер: серия
                    ПИ № ФС77-82772
                  </a>
                </li>
              </ul>
            </AppCard>
          </div>
        </div>

        <div class="regular-text">
          Журнал распространяется по подписке и адресной рассылке по всей
          территории Российской Федерации, подписной индекс 39076. Подписаться
          на журнал вы можете: через Объединенный каталог «Пресса России»
          <a
            class="a-regular"
            href="https://www.pressa-rf.ru/cat/1/edition/y_e39076/"
          >
            www.pressa-rf.ru
          </a>
        </div>

        <hr />

        <div class="regular-text">
          Журнал включен в Перечень ведущих рецензируемых научных журналов и
          изданий, в которых должны быть опубликованы основные научные
          результаты диссертаций на соискание ученых степеней доктора и
          кандидата наук и в Российский индекс научного цитирования (РИНЦ).
        </div>

        <hr />

        <div class="regular-text">
          Электронная версия журнала размещается на сайте Научной электронной
          библиотеки (eLIBRARY.RU).
        </div>

        <hr />

        <div class="regular-text">
          <p><strong>Главной целью журнала</strong></p>
          является научное обеспечение развития водного хозяйства,
          совершенствование методов управления в области использования,
          восстановления и охраны водных ресурсов, а также распространение
          научно-практического опыта и научных разработок, способных повысить
          эффективность работы водохозяйственной отрасли.
        </div>

        <div class="list list_bulletpoit">
          <div class="list__title">
            Журнал «Водное хозяйство России: проблемы, технологии, управление»
            ставит перед собой следующие <strong>задачи</strong>:
          </div>
          <div class="list__content">
            <ul class="list-disc ul_bulletpoint">
              <li>
                публикация статей, соответствующих международным стандартам
                использования концепций, исследовательских техник;
              </li>

              <li>
                расширение географии авторов, активное привлечение зарубежных
                исследователей;
              </li>

              <li>
                постоянное совершенствование системы научного рецензирования
                статей с привлечением широкого круга ученых в соответствии с
                тематикой публикаций;
              </li>

              <li>
                формирование оптимальных условий для научных дискуссий,
                взаимодействия и коммуникации авторов и читателей журнала.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="regular-text">Публикация статей бесплатная.</div>
        <hr />
        <div class="img-set">
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
          >
            <img
              alt="Лицензия Creative Commons"
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
            />
          </a>
          <img src="/open_access.png" style="width: 45px" />
        </div>
        <div class="regular-text regular-text_sm">
          All works are licensed under a
          <a
            class="a-regular"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
            >Creative Commons Attribution-NonCommercial 4.0 International
            License</a
          >
        </div>
      </div>
    </div>
    <div class="about-page__right">
      <ArchiveSidebar />
      <MajorEditorSidebar />
    </div>
  </div>
</template>

<style scoped>
.about-page {
  @apply flex flex-row container mx-auto md:flex md:justify-center;
}
.about-page__left {
  @apply basis-3/4;
}
.about-page__right {
  @apply basis-1/4 p-4 space-y-4 bg-mainColors-content-right-bg;
}
.about-page__title {
  @apply py-4 flex justify-center;
}

.AppH2 {
  @apply py-4;
}

.regular-text {
  @apply py-4;
}

.regular-text_sm {
  @apply text-sm;
}

.list {
  @apply list-disc;
}

.ul_bulletpoint {
  @apply px-6 py-4;
}

hr {
  @apply p-2;
}

.img-set {
  @apply p-2 flex flex-row items-center;
}
</style>
