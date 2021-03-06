import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect} from 'chai';
import Button from '../Button';

describe('<Button />', () => {
  it('renders a basic button', () => {
    const wrapper = renderToStaticMarkup(<Button className="custom-class" href="example.com">Button</Button>);

    expect(wrapper).html.to.equal(`
      <table class="button custom-class">
        <tr>
          <td>
            <table>
              <tr>
                <td><a href="example.com">Button</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `);
  });

  it('allows a target to be set', () => {
    const wrapper = renderToStaticMarkup(<Button href="example.com" target="_blank"/>);
    expect(wrapper).html.to.equal(`
      <table class="button">
        <tr>
          <td>
            <table>
              <tr>
                <td><a href="example.com" target="_blank"></a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `);
  });

  it('renders an expanded button', () => {
    const wrapper = renderToStaticMarkup(<Button className="expand" href="example.com"/>);
    expect(wrapper).html.to.equal(`
      <table class="button expand">
        <tr>
          <td>
            <table>
              <tr>
                <td>
                  <center><a  href="example.com" align="center" class="float-center"></a></center>
                </td>
              </tr>
            </table>
          </td>
          <td class="expander"></td>
        </tr>
      </table>
    `);
  });
});
