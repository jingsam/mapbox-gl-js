// @flow
const assert = require('assert');

import type {TriangleIndexArray, LineIndexArray} from '../data/index_array_type';
import type {SerializedStructArray} from '../util/struct_array';
import type Context from '../gl/context';


class IndexBuffer {
    context: Context;
    buffer: WebGLBuffer;
    dynamicDraw: boolean;

    constructor(context: Context, array: TriangleIndexArray | LineIndexArray, dynamicDraw?: boolean) {
        this.context = context;
        const gl = context.gl;
        this.buffer = gl.createBuffer();
        this.dynamicDraw = Boolean(dynamicDraw);

        // The bound index buffer is part of vertex array object state. We don't want to
        // modify whatever VAO happens to be currently bound, so make sure the default
        // vertex array provided by the context is bound instead.
        if (context.extVertexArrayObject) {
            context.bindVertexArrayOES.set(null);
        }

        context.bindElementBuffer.set(this.buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, array.arrayBuffer, this.dynamicDraw ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);

        if (!this.dynamicDraw) {
            delete array.arrayBuffer;
        }
    }

    bind() {
        // const gl = this.context.gl;
        // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
        this.context.bindElementBuffer.set(this.buffer);
        // TODO not sure why this doesn't work, but using bindElementBuffer throws:
        // [.Offscreen-For-WebGL-0x7fbaf382a800]GL ERROR :GL_INVALID_OPERATION :
        //  glDrawElements: bound to target 0x8893 : no buffer
    }

    updateData(array: SerializedStructArray) {
        const gl = this.context.gl;
        assert(this.dynamicDraw);
        this.bind();
        gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, array.arrayBuffer);
    }

    destroy() {
        const gl = this.context.gl;
        if (this.buffer) {
            gl.deleteBuffer(this.buffer);
            delete this.buffer;
        }
    }
}

module.exports = IndexBuffer;
