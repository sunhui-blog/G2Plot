import { Plot } from '../../core/plot';
import { Adaptor } from '../../core/adaptor';
import { TreemapOptions } from './types';
import { adaptor } from './adaptor';

export { TreemapOptions };

export class Treemap extends Plot<TreemapOptions> {
  /** 图表类型 */
  public type: string = 'treemap';

  protected getSchemaAdaptor(): Adaptor<TreemapOptions> {
    return adaptor;
  }
}
