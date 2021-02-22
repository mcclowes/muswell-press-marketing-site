import * as vars from "../vars";
import { css } from "styled-components";
import { objMap } from "../../util";

export const bp = objMap(vars.bps, (key, val) => ({
  min:
    `
      @media (min-width: ${val.min}px)
    `,
  max:
    `
      @media (max-width: ${val.max}px)
    `,
  only: `
    @media (min-width: ${val.min}px) and (max-width: ${val.max}px)
  `,
}));

export const xs = bp.xs.only;
export const sm = bp.sm.only;
export const md = bp.md.only;
export const lg = bp.lg.only;

export const bpEach = (prop, vals) => {
  console.log(prop, bp)
  return css`
    ${
      Object.keys(vals)
        .map((key) => `
          ${bp[key].only} {
            ${prop}: ${vals[key]};
          }`
        ) 
    };
  `
};

export const bpEither = (prop, vals) => css`
  ${xs} {
    ${prop}: ${vals.xs};
  };

  ${bp.sm.min} {
    ${prop}: ${vals.other};
  };
`;
