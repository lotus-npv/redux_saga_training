import styled, { css } from 'styled-components';

export const Text = styled.p`
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  width: ${(props) => props.width || 'auto'};

  color: ${(props) => props.color || props.theme.colors.primaryText};
  font-size: ${(props) => props.fontSize || props.theme.fontSize.md};
  line-height: ${(props) => props.lineHeight || props.theme.lineHeight.md};
  word-wrap: break-word;
  word-break: break-word;

  & > strong {
    font-weight: ${(props) => props.theme.fontWeight.w6};
    color: ${(props) => props.strongColor || props.theme.colors.primaryHeaderText};
  }

  /*pointer*/
  ${(props) => props.pointer
    && css`
      cursor: pointer;
    `}

  /*width 100%*/
  ${(props) => props.w100
    && css`
      width: 100%;
    `}

  /*width 50%*/
  ${(props) => props.w50
    && css`
      width: 50%;
    `}

  /*truncate*/
  ${(props) => props.truncate
    && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  /* Multi Line Text */
  ${(props) => props.multiLine
    && css`
      white-space: pre-line;
    `}

  /* One Line Text */
  ${(props) => props.oneLine
    && css`
      white-space: pre;
    `}

  /*uppercase*/
  ${(props) => props.uppercase
    && css`
      text-transform: uppercase;
    `}

  /*font-weight*/
  ${(props) => props.w3
    && css`
      font-weight: ${props.theme.fontWeight.w3};
    `}
  ${(props) => props.w6
    && css`
      font-weight: ${props.theme.fontWeight.w6};
    `}

  /*font-size*/
  ${(props) => props.xxs
    && css`
      font-size: ${props.theme.fontSize.xxs};
      line-height: ${props.lineHeight || props.theme.lineHeight.xxs};
    `}
  ${(props) => props.xs
    && css`
      font-size: ${props.theme.fontSize.xs};
      line-height: ${props.theme.lineHeight.xs};
    `}
  ${(props) => props.sm
    && css`
      font-size: ${props.theme.fontSize.sm};
      line-height: ${props.theme.lineHeight.sm};
    `}
  ${(props) => props.md
    && css`
      font-size: ${props.theme.fontSize.md};
      line-height: ${props.theme.lineHeight.md};
    `}
  ${(props) => props.lg
    && css`
      font-size: ${props.theme.fontSize.lg};
      line-height: ${props.theme.lineHeight.lg};
    `}
  ${(props) => props.xl
    && css`
      font-size: ${props.theme.fontSize.xl};
      line-height: ${props.theme.lineHeight.xl};
    `}
  ${(props) => props.xxl
    && css`
      font-size: ${props.theme.fontSize.xxl};
      line-height: ${props.theme.lineHeight.xxl};
    `}
  ${(props) => props.xxxl
    && css`
      font-size: ${props.theme.fontSize.xxxl};
      line-height: ${props.theme.lineHeight.xxxl};
    `}

  /*color*/
  ${(props) => props.primaryColor
    && css`
      color: ${props.theme.colors.primary};
    `}
  ${(props) => props.secondaryColor
    && css`
      color: ${props.theme.colors.secondary};
    `}
  ${(props) => props.tertiaryColor
    && css`
      color: ${props.theme.colors.tertiary};
    `}
  ${(props) => props.headerText
    && css`
      color: ${props.theme.colors.primaryHeaderText};
    `}
  ${(props) => props.subText
    && css`
      color: ${props.theme.colors.primarySubText};
    `}
  ${(props) => props.secondaryText
    && css`
      color: ${props.theme.colors.secondaryText};
    `}
  ${(props) => props.notifyHighlight
    && css`
      color: ${props.theme.colors.notifyHighlight};
    `}
  ${(props) => props.tertiaryBolor
    && css`
      color: ${props.theme.colors.tertiaryBorder};
    `}
  ${(props) => props.white
    && css`
      color: white;
    `}
  ${(props) => props.error
    && css`
      color: ${props.theme.colors.error};
    `}
  ${(props) => props.activityChart && css`
    color: #aaaaaa;
  `}
  ${(props) => props.topicTag && css`
    color: #fe5a5a;
  `}

  /* position text */
  ${(props) => props.center
    && css`
      text-align: center;
    `}
  ${(props) => props.right
    && css`
      text-align: right;
    `}
  ${(props) => props.left
    && css`
      text-align: left;
    `}

  /* text style */
  ${(props) => props.underline
    && css`
      text-decoration: underline;
    `}

   /* width 100% */
  ${(props) => props.widthMax
    && css`
      width: 100%;
    `}

  /* custom field input label */
  ${(props) => props.customFieldLabel
    && css`
      display: flex;
      align-items: center;
      margin: 10px 0;
    `}

  /* text shadow */
  ${(props) => props.blackShadow
    && css`
      text-shadow: 0 0 4px black, 0 0 4px black;
    `}

  /* cursor pointer */
  ${(props) => props.cursorPointer
    && css`
     cursor: pointer;
    `}

  /* white space*/
  ${(props) => props.preWrapSpace
    && css`
     white-space: pre-wrap;
    `}
  /* break word IE*/
  ${(props) => props.breakWord
    && css`
      word-break: break-all;
    `}
`;
