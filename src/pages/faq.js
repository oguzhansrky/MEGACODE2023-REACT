import { Content } from "@/components/Content";
import PageHead from "@/layout/head/Head";
import { Collapse } from "antd";
import useTranslation from 'next-translate/useTranslation';

export default function SSS() {
  const { t } = useTranslation("common");
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    {
      key: "1",
      label: t('faq.software_dev_label'),
      children: (
        <div className="card-body ">
          <dl>
            <dt>- {t('faq.software_dev_desc_title')}</dt>
            <dd>
            {t('faq.software_dev_desc')}
            </dd>
          </dl>
          <dl>
            <dt>-{t('faq.software_dev_desc_title2')}</dt>
            <dd>
            {t('faq.software_dev_desc2')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.software_dev_desc_title3')}</dt>
            <dd>
            {t('faq.software_dev_desc3')}
            </dd>
          </dl>
          <dl>
            <dt>
              - {t('faq.software_dev_desc_title4')}
            </dt>
            <dd>
            {t('faq.software_dev_desc4')}{" "}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.software_dev_desc_title5')}</dt>
            <dd>
            {t('faq.software_dev_desc5')}
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "2",
      label: t('faq.web_design_label'),
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- {t('faq.web_design_desc_title')}</dt>
            <dd>
            {t('faq.web_design_desc')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.web_design_desc_title2')}</dt>
            <dd>
            {t('faq.web_design_desc2')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.web_design_desc_title3')}</dt>
            <dd>
            {t('faq.web_design_desc3')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.web_design_desc_title4')}</dt>
            <dd>
            {t('faq.web_design_desc4')}
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "3",
      label: t('faq.mobil_app_dev_label'),
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- {t('faq.mobil_app_dev_title')}</dt>
            <dd>
            {t('faq.mobil_app_dev_desc')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.mobil_app_dev_title2')}</dt>
            <dd>{t('faq.mobil_app_dev_list1')} =&gt; Swift, RxSwift, RxFlow, MVVM</dd>
            <dd>
              Android =&gt; Kotlin, RxKotlin, Navigation Component, Hilt, MVVM
            </dd>
            <dd>Flutter =&gt; Bloc Pattern</dd>
          </dl>
          <dl>
            <dt>- {t('faq.mobil_app_dev_title3')}</dt>
            <dd>
            {t('faq.mobil_app_dev_desc3')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.mobil_app_dev_title4')}</dt>
            <dd>
            {t('faq.mobil_app_dev_desc4')}
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "4",
      label: t('faq.commercial_label'),
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- {t('faq.commercial_desc_title')}</dt>
            <dd>
            {t('faq.commercial_desc')}{" "}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.commercial_desc_title2')}</dt>
            <dd>
            {t('faq.commercial_desc2')}
            </dd>
          </dl>
          <dl>
            <dt>
              - {t('faq.commercial_desc_title3')}
            </dt>
            <dd>
            {t('faq.commercial_desc3')}{" "}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.commercial_desc_title4')}</dt>
            <dd>
            {t('faq.commercial_desc4')}
            </dd>
          </dl>
        </div>
      ),
    },
    {
      key: "5",
      label: t('faq.social_media_label'),
      children: (
        <div className="card-body text-justify">
          <dl>
            <dt>- {t('faq.social_media_desc_title')}</dt>
            <dd>
            {t('faq.social_media_desc')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.commercial_desc_title2')}</dt>
            <dd>
            {t('faq.commercial_desc2')}
            </dd>
            <dd>
            {t('faq.commercial_desc2_1')}
            </dd>
          </dl>
          <dl>
            <dt>
            {t('faq.commercial_desc_title3')}
            </dt>
            <dd>
            {t('faq.commercial_desc3')}
            </dd>
          </dl>
          <dl>
            <dt>- {t('faq.commercial_desc_title4')}</dt>
            <dd>
            {t('faq.commercial_desc4')}
            </dd>
          </dl>
        </div>
      ),
    },
  ];
  return (
    <>
      <Content
        title={t('faq.main_title')}
        title_2={t('faq.main_title2')}
        desc={
          t('faq.main_description')
        }
      >
        <Collapse accordion items={items} />
      </Content>
    </>
  );
}
