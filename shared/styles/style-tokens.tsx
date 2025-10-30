import { ThemeConfig } from "antd";
import { victorMono } from '@/shared/lib/fonts'
import { stolzl } from '@/shared/lib/localFonts'

export const tokens: ThemeConfig = {
  token: {
    fontFamily: `${victorMono.style.fontFamily}, monospace`,
    colorPrimary: 'var(--white)',
    colorError: '#ff9c00',
    borderRadius: 16,
    // colorBorder: 'transparent'
  },
  components: {
    Tabs: {
      inkBarColor: 'none',
      itemActiveColor: 'var(--dark-blue)',
      itemHoverColor: 'var(--dark-blue)',
      itemSelectedColor: 'var(--dark-blue)',
      titleFontSizeLG: 18,
      titleFontSizeSM: 18,
      horizontalItemPadding: '0px 0px 8px',
      horizontalMargin: '0 0 8px 0',
      horizontalItemGutter: 32,
      fontFamily: `${stolzl.style.fontFamily}, monospace`, // Прямое использование
    },
    Collapse: {
      contentPadding: '0px',
      headerPadding: '0px'
    },
    Rate: {
      starBg: 'var(--white)',
      starColor: 'var(--primary-red)'
    },
    Form: {
      itemMarginBottom: 32,
      verticalLabelPadding: '0px 0px 16px',
      labelRequiredMarkColor: 'var(--primary-red)'
    },
    Input: {
      addonBg: 'var(--light-blue)',
      activeBg: 'var(--light-blue)',
      activeBorderColor: 'none',
      activeShadow: 'none',
      errorActiveShadow: 'none',
      hoverBg: 'none',
      hoverBorderColor: 'none',
      warningActiveShadow: 'none',
      borderRadius: 15,
      inputFontSize: 20,
      paddingBlock: 8,
      paddingInline: 16
    },
    Pagination: {
      // itemSize: 22,
      itemBg: 'var(--light-blue)',
      itemActiveBg: 'var(--primary-red)',
    },
    DatePicker: {
      activeBg: 'var(--primary-red)',
      activeShadow: 'none',
      hoverBg: 'var(--light-blue)',
      errorActiveShadow: 'none',
      inputFontSize: 20,
      activeBorderColor: 'none',
      cellHeight: 28,
      cellWidth: 28,
      timeColumnWidth: 48,
      cellRangeBorderColor: 'var(--primary-red)',
      cellActiveWithRangeBg: 'var(--primary-red)'
    },

    Select: {
      activeBorderColor: 'none',
      activeOutlineColor: 'none',
      hoverBorderColor: 'none'
    },
    Tooltip: {
      paddingXS: 16
    },
    Radio: {
      radioSize: 14,
      dotSize: 8
    }

  }
}

